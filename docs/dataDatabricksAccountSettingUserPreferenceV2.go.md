# `dataDatabricksAccountSettingUserPreferenceV2` Submodule <a name="`dataDatabricksAccountSettingUserPreferenceV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountSettingUserPreferenceV2 <a name="DataDatabricksAccountSettingUserPreferenceV2" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2 databricks_account_setting_user_preference_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.NewDataDatabricksAccountSettingUserPreferenceV2(scope Construct, id *string, config DataDatabricksAccountSettingUserPreferenceV2Config) DataDatabricksAccountSettingUserPreferenceV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config">DataDatabricksAccountSettingUserPreferenceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config">DataDatabricksAccountSettingUserPreferenceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAccountSettingUserPreferenceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAccountSettingUserPreferenceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountSettingUserPreferenceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.booleanVal">BooleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveBooleanVal">EffectiveBooleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveStringVal">EffectiveStringVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.stringVal">StringVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BooleanVal`<sup>Required</sup> <a name="BooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.booleanVal"></a>

```go
func BooleanVal() DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference</a>

---

##### `EffectiveBooleanVal`<sup>Required</sup> <a name="EffectiveBooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveBooleanVal"></a>

```go
func EffectiveBooleanVal() DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a>

---

##### `EffectiveStringVal`<sup>Required</sup> <a name="EffectiveStringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveStringVal"></a>

```go
func EffectiveStringVal() DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference</a>

---

##### `StringVal`<sup>Required</sup> <a name="StringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.stringVal"></a>

```go
func StringVal() DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountSettingUserPreferenceV2BooleanVal <a name="DataDatabricksAccountSettingUserPreferenceV2BooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

&datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2Config <a name="DataDatabricksAccountSettingUserPreferenceV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

&datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}.

---

### DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

&datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

&datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2StringVal <a name="DataDatabricksAccountSettingUserPreferenceV2StringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

&datadatabricksaccountsettinguserpreferencev2.DataDatabricksAccountSettingUserPreferenceV2StringVal {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.NewDataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal">DataDatabricksAccountSettingUserPreferenceV2BooleanVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAccountSettingUserPreferenceV2BooleanVal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal">DataDatabricksAccountSettingUserPreferenceV2BooleanVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.NewDataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.NewDataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountsettinguserpreferencev2"

datadatabricksaccountsettinguserpreferencev2.NewDataDatabricksAccountSettingUserPreferenceV2StringValOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal">DataDatabricksAccountSettingUserPreferenceV2StringVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAccountSettingUserPreferenceV2StringVal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal">DataDatabricksAccountSettingUserPreferenceV2StringVal</a>

---



