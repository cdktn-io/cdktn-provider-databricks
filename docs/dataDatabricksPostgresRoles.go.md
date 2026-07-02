# `dataDatabricksPostgresRoles` Submodule <a name="`dataDatabricksPostgresRoles` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresRoles <a name="DataDatabricksPostgresRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles databricks_postgres_roles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRoles(scope Construct, id *string, config DataDatabricksPostgresRolesConfig) DataDatabricksPostgresRoles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig">DataDatabricksPostgresRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig">DataDatabricksPostgresRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresRolesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.DataDatabricksPostgresRoles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.DataDatabricksPostgresRoles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.DataDatabricksPostgresRoles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.DataDatabricksPostgresRoles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPostgresRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPostgresRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference">DataDatabricksPostgresRolesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.roles">Roles</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList">DataDatabricksPostgresRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresRolesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference">DataDatabricksPostgresRolesProviderConfigOutputReference</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.roles"></a>

```go
func Roles() DataDatabricksPostgresRolesRolesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList">DataDatabricksPostgresRolesRolesList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresRolesConfig <a name="DataDatabricksPostgresRolesConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

&datadatabrickspostgresroles.DataDatabricksPostgresRolesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresRolesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

### DataDatabricksPostgresRolesProviderConfig <a name="DataDatabricksPostgresRolesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

&datadatabrickspostgresroles.DataDatabricksPostgresRolesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

### DataDatabricksPostgresRolesRoles <a name="DataDatabricksPostgresRolesRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

&datadatabrickspostgresroles.DataDatabricksPostgresRolesRoles {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresRolesRolesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

### DataDatabricksPostgresRolesRolesProviderConfig <a name="DataDatabricksPostgresRolesRolesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

&datadatabrickspostgresroles.DataDatabricksPostgresRolesRolesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

### DataDatabricksPostgresRolesRolesSpec <a name="DataDatabricksPostgresRolesRolesSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

&datadatabrickspostgresroles.DataDatabricksPostgresRolesRolesSpec {
	Attributes: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes,
	AuthMethod: *string,
	IdentityType: *string,
	MembershipRoles: *[]*string,
	PostgresRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.authMethod">AuthMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.identityType">IdentityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.membershipRoles">MembershipRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.postgresRole">PostgresRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.attributes"></a>

```go
Attributes DataDatabricksPostgresRolesRolesSpecAttributes
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.authMethod"></a>

```go
AuthMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}.

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}.

---

##### `MembershipRoles`<sup>Optional</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.membershipRoles"></a>

```go
MembershipRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}.

---

##### `PostgresRole`<sup>Optional</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.postgresRole"></a>

```go
PostgresRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}.

---

### DataDatabricksPostgresRolesRolesSpecAttributes <a name="DataDatabricksPostgresRolesRolesSpecAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

&datadatabrickspostgresroles.DataDatabricksPostgresRolesRolesSpecAttributes {
	Bypassrls: interface{},
	Createdb: interface{},
	Createrole: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.bypassrls">Bypassrls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createdb">Createdb</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createrole">Createrole</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}. |

---

##### `Bypassrls`<sup>Optional</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.bypassrls"></a>

```go
Bypassrls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

##### `Createdb`<sup>Optional</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createdb"></a>

```go
Createdb interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

##### `Createrole`<sup>Optional</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createrole"></a>

```go
Createrole interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

### DataDatabricksPostgresRolesRolesStatus <a name="DataDatabricksPostgresRolesRolesStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

&datadatabrickspostgresroles.DataDatabricksPostgresRolesRolesStatus {
	Attributes: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes,
	AuthMethod: *string,
	IdentityType: *string,
	MembershipRoles: *[]*string,
	PostgresRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.authMethod">AuthMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.identityType">IdentityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.membershipRoles">MembershipRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.postgresRole">PostgresRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.attributes"></a>

```go
Attributes DataDatabricksPostgresRolesRolesStatusAttributes
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.authMethod"></a>

```go
AuthMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}.

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}.

---

##### `MembershipRoles`<sup>Optional</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.membershipRoles"></a>

```go
MembershipRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}.

---

##### `PostgresRole`<sup>Optional</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.postgresRole"></a>

```go
PostgresRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}.

---

### DataDatabricksPostgresRolesRolesStatusAttributes <a name="DataDatabricksPostgresRolesRolesStatusAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

&datadatabrickspostgresroles.DataDatabricksPostgresRolesRolesStatusAttributes {
	Bypassrls: interface{},
	Createdb: interface{},
	Createrole: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.bypassrls">Bypassrls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createdb">Createdb</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createrole">Createrole</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}. |

---

##### `Bypassrls`<sup>Optional</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.bypassrls"></a>

```go
Bypassrls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

##### `Createdb`<sup>Optional</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createdb"></a>

```go
Createdb interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

##### `Createrole`<sup>Optional</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createrole"></a>

```go
Createrole interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresRolesProviderConfigOutputReference <a name="DataDatabricksPostgresRolesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRolesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRolesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresRolesRolesList <a name="DataDatabricksPostgresRolesRolesList" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRolesRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPostgresRolesRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get"></a>

```go
func Get(index *f64) DataDatabricksPostgresRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresRolesRolesOutputReference <a name="DataDatabricksPostgresRolesRolesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRolesRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPostgresRolesRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresRolesRolesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference">DataDatabricksPostgresRolesRolesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference">DataDatabricksPostgresRolesRolesSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference">DataDatabricksPostgresRolesRolesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresRolesRolesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference">DataDatabricksPostgresRolesRolesProviderConfigOutputReference</a>

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.spec"></a>

```go
func Spec() DataDatabricksPostgresRolesRolesSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference">DataDatabricksPostgresRolesRolesSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.status"></a>

```go
func Status() DataDatabricksPostgresRolesRolesStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference">DataDatabricksPostgresRolesRolesStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresRolesRoles
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>

---


### DataDatabricksPostgresRolesRolesProviderConfigOutputReference <a name="DataDatabricksPostgresRolesRolesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRolesRolesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRolesRolesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresRolesRolesSpecAttributesOutputReference <a name="DataDatabricksPostgresRolesRolesSpecAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRolesRolesSpecAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRolesRolesSpecAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetBypassrls">ResetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreatedb">ResetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreaterole">ResetCreaterole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBypassrls` <a name="ResetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetBypassrls"></a>

```go
func ResetBypassrls()
```

##### `ResetCreatedb` <a name="ResetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreatedb"></a>

```go
func ResetCreatedb()
```

##### `ResetCreaterole` <a name="ResetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreaterole"></a>

```go
func ResetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrlsInput">BypassrlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdbInput">CreatedbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createroleInput">CreateroleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrls">Bypassrls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdb">Createdb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createrole">Createrole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassrlsInput`<sup>Optional</sup> <a name="BypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrlsInput"></a>

```go
func BypassrlsInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedbInput`<sup>Optional</sup> <a name="CreatedbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdbInput"></a>

```go
func CreatedbInput() interface{}
```

- *Type:* interface{}

---

##### `CreateroleInput`<sup>Optional</sup> <a name="CreateroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createroleInput"></a>

```go
func CreateroleInput() interface{}
```

- *Type:* interface{}

---

##### `Bypassrls`<sup>Required</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrls"></a>

```go
func Bypassrls() interface{}
```

- *Type:* interface{}

---

##### `Createdb`<sup>Required</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdb"></a>

```go
func Createdb() interface{}
```

- *Type:* interface{}

---

##### `Createrole`<sup>Required</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createrole"></a>

```go
func Createrole() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresRolesRolesSpecOutputReference <a name="DataDatabricksPostgresRolesRolesSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRolesRolesSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRolesRolesSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetMembershipRoles">ResetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetPostgresRole">ResetPostgresRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes"></a>

```go
func PutAttributes(value DataDatabricksPostgresRolesRolesSpecAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAuthMethod"></a>

```go
func ResetAuthMethod()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetMembershipRoles` <a name="ResetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetMembershipRoles"></a>

```go
func ResetMembershipRoles()
```

##### `ResetPostgresRole` <a name="ResetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetPostgresRole"></a>

```go
func ResetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference">DataDatabricksPostgresRolesRolesSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRolesInput">MembershipRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRoleInput">PostgresRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethod">AuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRoles">MembershipRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRole">PostgresRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec">DataDatabricksPostgresRolesRolesSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributes"></a>

```go
func Attributes() DataDatabricksPostgresRolesRolesSpecAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference">DataDatabricksPostgresRolesRolesSpecAttributesOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethodInput"></a>

```go
func AuthMethodInput() *string
```

- *Type:* *string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `MembershipRolesInput`<sup>Optional</sup> <a name="MembershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRolesInput"></a>

```go
func MembershipRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresRoleInput`<sup>Optional</sup> <a name="PostgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRoleInput"></a>

```go
func PostgresRoleInput() *string
```

- *Type:* *string

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethod"></a>

```go
func AuthMethod() *string
```

- *Type:* *string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `MembershipRoles`<sup>Required</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRoles"></a>

```go
func MembershipRoles() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresRole`<sup>Required</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRole"></a>

```go
func PostgresRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresRolesRolesSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec">DataDatabricksPostgresRolesRolesSpec</a>

---


### DataDatabricksPostgresRolesRolesStatusAttributesOutputReference <a name="DataDatabricksPostgresRolesRolesStatusAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRolesRolesStatusAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRolesRolesStatusAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetBypassrls">ResetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreatedb">ResetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreaterole">ResetCreaterole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBypassrls` <a name="ResetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetBypassrls"></a>

```go
func ResetBypassrls()
```

##### `ResetCreatedb` <a name="ResetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreatedb"></a>

```go
func ResetCreatedb()
```

##### `ResetCreaterole` <a name="ResetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreaterole"></a>

```go
func ResetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrlsInput">BypassrlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdbInput">CreatedbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createroleInput">CreateroleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrls">Bypassrls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdb">Createdb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createrole">Createrole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassrlsInput`<sup>Optional</sup> <a name="BypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrlsInput"></a>

```go
func BypassrlsInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedbInput`<sup>Optional</sup> <a name="CreatedbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdbInput"></a>

```go
func CreatedbInput() interface{}
```

- *Type:* interface{}

---

##### `CreateroleInput`<sup>Optional</sup> <a name="CreateroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createroleInput"></a>

```go
func CreateroleInput() interface{}
```

- *Type:* interface{}

---

##### `Bypassrls`<sup>Required</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrls"></a>

```go
func Bypassrls() interface{}
```

- *Type:* interface{}

---

##### `Createdb`<sup>Required</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdb"></a>

```go
func Createdb() interface{}
```

- *Type:* interface{}

---

##### `Createrole`<sup>Required</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createrole"></a>

```go
func Createrole() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresRolesRolesStatusOutputReference <a name="DataDatabricksPostgresRolesRolesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresroles"

datadatabrickspostgresroles.NewDataDatabricksPostgresRolesRolesStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresRolesRolesStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetMembershipRoles">ResetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetPostgresRole">ResetPostgresRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes"></a>

```go
func PutAttributes(value DataDatabricksPostgresRolesRolesStatusAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAuthMethod"></a>

```go
func ResetAuthMethod()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetMembershipRoles` <a name="ResetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetMembershipRoles"></a>

```go
func ResetMembershipRoles()
```

##### `ResetPostgresRole` <a name="ResetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetPostgresRole"></a>

```go
func ResetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference">DataDatabricksPostgresRolesRolesStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRolesInput">MembershipRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRoleInput">PostgresRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethod">AuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRoles">MembershipRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRole">PostgresRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus">DataDatabricksPostgresRolesRolesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributes"></a>

```go
func Attributes() DataDatabricksPostgresRolesRolesStatusAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference">DataDatabricksPostgresRolesRolesStatusAttributesOutputReference</a>

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethodInput"></a>

```go
func AuthMethodInput() *string
```

- *Type:* *string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `MembershipRolesInput`<sup>Optional</sup> <a name="MembershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRolesInput"></a>

```go
func MembershipRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresRoleInput`<sup>Optional</sup> <a name="PostgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRoleInput"></a>

```go
func PostgresRoleInput() *string
```

- *Type:* *string

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethod"></a>

```go
func AuthMethod() *string
```

- *Type:* *string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `MembershipRoles`<sup>Required</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRoles"></a>

```go
func MembershipRoles() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresRole`<sup>Required</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRole"></a>

```go
func PostgresRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresRolesRolesStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus">DataDatabricksPostgresRolesRolesStatus</a>

---



