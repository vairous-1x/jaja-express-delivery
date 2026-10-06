export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      menu_categories: {
        Row: {
          created_at: string
          id: string
          name: string
          restaurant_id: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          restaurant_id: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          restaurant_id?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "menu_categories_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_items: {
        Row: {
          category_id: string | null
          created_at: string
          description: string | null
          id: string
          image_key: string | null
          is_available: boolean
          is_popular: boolean
          name: string
          price: number
          restaurant_id: string
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_key?: string | null
          is_available?: boolean
          is_popular?: boolean
          name: string
          price: number
          restaurant_id: string
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_key?: string | null
          is_available?: boolean
          is_popular?: boolean
          name?: string
          price?: number
          restaurant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "menu_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "menu_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menu_items_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_option_groups: {
        Row: {
          id: string
          is_required: boolean
          item_id: string
          max_select: number
          name: string
          sort_order: number
        }
        Insert: {
          id?: string
          is_required?: boolean
          item_id: string
          max_select?: number
          name: string
          sort_order?: number
        }
        Update: {
          id?: string
          is_required?: boolean
          item_id?: string
          max_select?: number
          name?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "menu_option_groups_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "menu_items"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_options: {
        Row: {
          group_id: string
          id: string
          name: string
          price_delta: number
          sort_order: number
        }
        Insert: {
          group_id: string
          id?: string
          name: string
          price_delta?: number
          sort_order?: number
        }
        Update: {
          group_id?: string
          id?: string
          name?: string
          price_delta?: number
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "menu_options_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "menu_option_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          id: string
          line_total: number
          menu_item_id: string | null
          name: string
          options: Json
          order_id: string
          quantity: number
          unit_price: number
        }
        Insert: {
          id?: string
          line_total: number
          menu_item_id?: string | null
          name: string
          options?: Json
          order_id: string
          quantity: number
          unit_price: number
        }
        Update: {
          id?: string
          line_total?: number
          menu_item_id?: string | null
          name?: string
          options?: Json
          order_id?: string
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_menu_item_id_fkey"
            columns: ["menu_item_id"]
            isOneToOne: false
            referencedRelation: "menu_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      order_status_history: {
        Row: {
          changed_by: string | null
          created_at: string
          id: string
          metadata: Json
          new_status: Database["public"]["Enums"]["order_status"]
          old_status: Database["public"]["Enums"]["order_status"] | null
          order_id: string
        }
        Insert: {
          changed_by?: string | null
          created_at?: string
          id?: string
          metadata?: Json
          new_status: Database["public"]["Enums"]["order_status"]
          old_status?: Database["public"]["Enums"]["order_status"] | null
          order_id: string
        }
        Update: {
          changed_by?: string | null
          created_at?: string
          id?: string
          metadata?: Json
          new_status?: Database["public"]["Enums"]["order_status"]
          old_status?: Database["public"]["Enums"]["order_status"] | null
          order_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_status_history_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          accepted_at: string | null
          cancelled_at: string | null
          commission_amount: number
          commission_pct: number
          created_at: string
          customer_id: string
          customer_note: string | null
          delivered_at: string | null
          delivery_address: string
          delivery_fee: number
          delivery_latitude: number | null
          delivery_longitude: number | null
          delivery_phone: string
          delivery_pin: string
          discount: number
          driver_id: string | null
          driver_payout: number
          id: string
          idempotency_key: string | null
          order_number: string
          payment_method: Database["public"]["Enums"]["payment_method"]
          payment_status: Database["public"]["Enums"]["payment_status"]
          picked_up_at: string | null
          prepared_at: string | null
          restaurant_id: string
          restaurant_payout: number
          service_fee: number
          status: Database["public"]["Enums"]["order_status"]
          subtotal: number
          total: number
          updated_at: string
        }
        Insert: {
          accepted_at?: string | null
          cancelled_at?: string | null
          commission_amount: number
          commission_pct: number
          created_at?: string
          customer_id: string
          customer_note?: string | null
          delivered_at?: string | null
          delivery_address: string
          delivery_fee: number
          delivery_latitude?: number | null
          delivery_longitude?: number | null
          delivery_phone: string
          delivery_pin?: string
          discount?: number
          driver_id?: string | null
          driver_payout: number
          id?: string
          idempotency_key?: string | null
          order_number?: string
          payment_method?: Database["public"]["Enums"]["payment_method"]
          payment_status?: Database["public"]["Enums"]["payment_status"]
          picked_up_at?: string | null
          prepared_at?: string | null
          restaurant_id: string
          restaurant_payout: number
          service_fee: number
          status?: Database["public"]["Enums"]["order_status"]
          subtotal: number
          total: number
          updated_at?: string
        }
        Update: {
          accepted_at?: string | null
          cancelled_at?: string | null
          commission_amount?: number
          commission_pct?: number
          created_at?: string
          customer_id?: string
          customer_note?: string | null
          delivered_at?: string | null
          delivery_address?: string
          delivery_fee?: number
          delivery_latitude?: number | null
          delivery_longitude?: number | null
          delivery_phone?: string
          delivery_pin?: string
          discount?: number
          driver_id?: string | null
          driver_payout?: number
          id?: string
          idempotency_key?: string | null
          order_number?: string
          payment_method?: Database["public"]["Enums"]["payment_method"]
          payment_status?: Database["public"]["Enums"]["payment_status"]
          picked_up_at?: string | null
          prepared_at?: string | null
          restaurant_id?: string
          restaurant_payout?: number
          service_fee?: number
          status?: Database["public"]["Enums"]["order_status"]
          subtotal?: number
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_settings: {
        Row: {
          commission_pct: number
          driver_payout_pct: number
          id: number
          max_delivery_fee: number
          min_delivery_fee: number
          service_fee: number
          updated_at: string
        }
        Insert: {
          commission_pct?: number
          driver_payout_pct?: number
          id?: number
          max_delivery_fee?: number
          min_delivery_fee?: number
          service_fee?: number
          updated_at?: string
        }
        Update: {
          commission_pct?: number
          driver_payout_pct?: number
          id?: number
          max_delivery_fee?: number
          min_delivery_fee?: number
          service_fee?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      restaurants: {
        Row: {
          address: string | null
          created_at: string
          cuisines: string[]
          delivery_fee: number
          description: string | null
          id: string
          image_key: string
          is_demo: boolean
          is_open: boolean
          latitude: number | null
          longitude: number | null
          max_minutes: number
          min_minutes: number
          min_order: number
          name: string
          owner_id: string | null
          rating: number
          review_count: number
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          cuisines?: string[]
          delivery_fee?: number
          description?: string | null
          id?: string
          image_key?: string
          is_demo?: boolean
          is_open?: boolean
          latitude?: number | null
          longitude?: number | null
          max_minutes?: number
          min_minutes?: number
          min_order?: number
          name: string
          owner_id?: string | null
          rating?: number
          review_count?: number
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          cuisines?: string[]
          delivery_fee?: number
          description?: string | null
          id?: string
          image_key?: string
          is_demo?: boolean
          is_open?: boolean
          latitude?: number | null
          longitude?: number | null
          max_minutes?: number
          min_minutes?: number
          min_order?: number
          name?: string
          owner_id?: string | null
          rating?: number
          review_count?: number
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role:
        | "customer"
        | "driver"
        | "restaurant_owner"
        | "restaurant_manager"
        | "support"
        | "admin"
        | "super_admin"
      order_status:
        | "PENDING"
        | "ACCEPTED"
        | "PREPARING"
        | "READY"
        | "DRIVER_ASSIGNED"
        | "PICKED_UP"
        | "ON_THE_WAY"
        | "DELIVERED"
        | "CANCELLED"
      payment_method: "CASH" | "ONLINE"
      payment_status: "PENDING" | "PAID" | "FAILED" | "REFUNDED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "customer",
        "driver",
        "restaurant_owner",
        "restaurant_manager",
        "support",
        "admin",
        "super_admin",
      ],
      order_status: [
        "PENDING",
        "ACCEPTED",
        "PREPARING",
        "READY",
        "DRIVER_ASSIGNED",
        "PICKED_UP",
        "ON_THE_WAY",
        "DELIVERED",
        "CANCELLED",
      ],
      payment_method: ["CASH", "ONLINE"],
      payment_status: ["PENDING", "PAID", "FAILED", "REFUNDED"],
    },
  },
} as const
