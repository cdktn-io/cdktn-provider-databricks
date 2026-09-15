# `dataDatabricksPolicyInfos` Submodule <a name="`dataDatabricksPolicyInfos` Submodule" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfos <a name="DataDatabricksPolicyInfos" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos databricks_policy_infos}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfos(scope Construct, id *string, config DataDatabricksPolicyInfosConfig) DataDatabricksPolicyInfos
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig">DataDatabricksPolicyInfosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig">DataDatabricksPolicyInfosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetIncludeInherited">ResetIncludeInherited</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetMaxResults">ResetMaxResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPolicyInfosProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a>

---

##### `ResetIncludeInherited` <a name="ResetIncludeInherited" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetIncludeInherited"></a>

```go
func ResetIncludeInherited()
```

##### `ResetMaxResults` <a name="ResetMaxResults" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetMaxResults"></a>

```go
func ResetMaxResults()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPolicyInfos resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.DataDatabricksPolicyInfos_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.DataDatabricksPolicyInfos_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.DataDatabricksPolicyInfos_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.DataDatabricksPolicyInfos_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPolicyInfos resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPolicyInfos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPolicyInfos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList">DataDatabricksPolicyInfosPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference">DataDatabricksPolicyInfosProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInheritedInput">IncludeInheritedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResultsInput">MaxResultsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullnameInput">OnSecurableFullnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableTypeInput">OnSecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInherited">IncludeInherited</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResults">MaxResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableType">OnSecurableType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.policies"></a>

```go
func Policies() DataDatabricksPolicyInfosPoliciesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList">DataDatabricksPolicyInfosPoliciesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPolicyInfosProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference">DataDatabricksPolicyInfosProviderConfigOutputReference</a>

---

##### `IncludeInheritedInput`<sup>Optional</sup> <a name="IncludeInheritedInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInheritedInput"></a>

```go
func IncludeInheritedInput() interface{}
```

- *Type:* interface{}

---

##### `MaxResultsInput`<sup>Optional</sup> <a name="MaxResultsInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResultsInput"></a>

```go
func MaxResultsInput() *f64
```

- *Type:* *f64

---

##### `OnSecurableFullnameInput`<sup>Optional</sup> <a name="OnSecurableFullnameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullnameInput"></a>

```go
func OnSecurableFullnameInput() *string
```

- *Type:* *string

---

##### `OnSecurableTypeInput`<sup>Optional</sup> <a name="OnSecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableTypeInput"></a>

```go
func OnSecurableTypeInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeInherited`<sup>Required</sup> <a name="IncludeInherited" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInherited"></a>

```go
func IncludeInherited() interface{}
```

- *Type:* interface{}

---

##### `MaxResults`<sup>Required</sup> <a name="MaxResults" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResults"></a>

```go
func MaxResults() *f64
```

- *Type:* *f64

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullname"></a>

```go
func OnSecurableFullname() *string
```

- *Type:* *string

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableType"></a>

```go
func OnSecurableType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfosConfig <a name="DataDatabricksPolicyInfosConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	OnSecurableFullname: *string,
	OnSecurableType: *string,
	IncludeInherited: interface{},
	MaxResults: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableType">OnSecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.includeInherited">IncludeInherited</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#include_inherited DataDatabricksPolicyInfos#include_inherited}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.maxResults">MaxResults</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#max_results DataDatabricksPolicyInfos#max_results}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableFullname"></a>

```go
OnSecurableFullname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}.

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableType"></a>

```go
OnSecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}.

---

##### `IncludeInherited`<sup>Optional</sup> <a name="IncludeInherited" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.includeInherited"></a>

```go
IncludeInherited interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#include_inherited DataDatabricksPolicyInfos#include_inherited}.

---

##### `MaxResults`<sup>Optional</sup> <a name="MaxResults" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.maxResults"></a>

```go
MaxResults *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#max_results DataDatabricksPolicyInfos#max_results}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPolicyInfosProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig">DataDatabricksPolicyInfosProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}.

---

### DataDatabricksPolicyInfosPolicies <a name="DataDatabricksPolicyInfosPolicies" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPolicies {
	Name: *string,
	OnSecurableFullname: *string,
	OnSecurableType: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableType">OnSecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}.

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableFullname"></a>

```go
OnSecurableFullname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}.

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableType"></a>

```go
OnSecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPolicyInfosPoliciesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}.

---

### DataDatabricksPolicyInfosPoliciesColumnMask <a name="DataDatabricksPolicyInfosPoliciesColumnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesColumnMask {
	FunctionName: *string,
	OnColumn: *string,
	Using: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.onColumn">OnColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.using">Using</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}.

---

##### `OnColumn`<sup>Required</sup> <a name="OnColumn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.onColumn"></a>

```go
OnColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}.

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.using"></a>

```go
Using interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsing <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing {
	Alias: *string,
	Constant: *string,
	FunctionArgExpression: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.constant">Constant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.functionArgExpression">FunctionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#function_arg_expression DataDatabricksPolicyInfos#function_arg_expression}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.constant"></a>

```go
Constant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}.

---

##### `FunctionArgExpression`<sup>Optional</sup> <a name="FunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.functionArgExpression"></a>

```go
FunctionArgExpression DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#function_arg_expression DataDatabricksPolicyInfos#function_arg_expression}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression {
	TagIntrospection: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression.property.tagIntrospection">TagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_introspection DataDatabricksPolicyInfos#tag_introspection}. |

---

##### `TagIntrospection`<sup>Optional</sup> <a name="TagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression.property.tagIntrospection"></a>

```go
TagIntrospection DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_introspection DataDatabricksPolicyInfos#tag_introspection}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection {
	ColumnTagValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue,
	TagValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">ColumnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#column_tag_value DataDatabricksPolicyInfos#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue">TagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_value DataDatabricksPolicyInfos#tag_value}. |

---

##### `ColumnTagValue`<sup>Optional</sup> <a name="ColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```go
ColumnTagValue DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#column_tag_value DataDatabricksPolicyInfos#column_tag_value}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```go
TagValue DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_value DataDatabricksPolicyInfos#tag_value}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue {
	ColumnAlias: *string,
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">ColumnAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#column_alias DataDatabricksPolicyInfos#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}. |

---

##### `ColumnAlias`<sup>Required</sup> <a name="ColumnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```go
ColumnAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#column_alias DataDatabricksPolicyInfos#column_alias}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue {
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}.

---

### DataDatabricksPolicyInfosPoliciesDeny <a name="DataDatabricksPolicyInfosPoliciesDeny" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesDeny {
	Privileges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny.property.privileges">Privileges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#privileges DataDatabricksPolicyInfos#privileges}. |

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#privileges DataDatabricksPolicyInfos#privileges}.

---

### DataDatabricksPolicyInfosPoliciesGrant <a name="DataDatabricksPolicyInfosPoliciesGrant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesGrant {
	Privileges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant.property.privileges">Privileges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#privileges DataDatabricksPolicyInfos#privileges}. |

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#privileges DataDatabricksPolicyInfos#privileges}.

---

### DataDatabricksPolicyInfosPoliciesMatchColumns <a name="DataDatabricksPolicyInfosPoliciesMatchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesMatchColumns {
	Alias: *string,
	Condition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}.

---

### DataDatabricksPolicyInfosPoliciesProviderConfig <a name="DataDatabricksPolicyInfosPoliciesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}.

---

### DataDatabricksPolicyInfosPoliciesRowFilter <a name="DataDatabricksPolicyInfosPoliciesRowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesRowFilter {
	FunctionName: *string,
	Using: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.using">Using</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}.

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.using"></a>

```go
Using interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsing <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing {
	Alias: *string,
	Constant: *string,
	FunctionArgExpression: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.constant">Constant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.functionArgExpression">FunctionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#function_arg_expression DataDatabricksPolicyInfos#function_arg_expression}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.constant"></a>

```go
Constant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}.

---

##### `FunctionArgExpression`<sup>Optional</sup> <a name="FunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.functionArgExpression"></a>

```go
FunctionArgExpression DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#function_arg_expression DataDatabricksPolicyInfos#function_arg_expression}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression {
	TagIntrospection: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression.property.tagIntrospection">TagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_introspection DataDatabricksPolicyInfos#tag_introspection}. |

---

##### `TagIntrospection`<sup>Optional</sup> <a name="TagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression.property.tagIntrospection"></a>

```go
TagIntrospection DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_introspection DataDatabricksPolicyInfos#tag_introspection}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection {
	ColumnTagValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue,
	TagValue: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">ColumnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#column_tag_value DataDatabricksPolicyInfos#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue">TagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_value DataDatabricksPolicyInfos#tag_value}. |

---

##### `ColumnTagValue`<sup>Optional</sup> <a name="ColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```go
ColumnTagValue DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#column_tag_value DataDatabricksPolicyInfos#column_tag_value}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```go
TagValue DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_value DataDatabricksPolicyInfos#tag_value}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue {
	ColumnAlias: *string,
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">ColumnAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#column_alias DataDatabricksPolicyInfos#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}. |

---

##### `ColumnAlias`<sup>Required</sup> <a name="ColumnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```go
ColumnAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#column_alias DataDatabricksPolicyInfos#column_alias}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue {
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#tag_key DataDatabricksPolicyInfos#tag_key}.

---

### DataDatabricksPolicyInfosProviderConfig <a name="DataDatabricksPolicyInfosProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

&datadatabrickspolicyinfos.DataDatabricksPolicyInfosProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.132.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesColumnMaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing"></a>

```go
func PutUsing(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUsing` <a name="ResetUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resetUsing"></a>

```go
func ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.using">Using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList">DataDatabricksPolicyInfosPoliciesColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumnInput">OnColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.usingInput">UsingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumn">OnColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.using"></a>

```go
func Using() DataDatabricksPolicyInfosPoliciesColumnMaskUsingList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList">DataDatabricksPolicyInfosPoliciesColumnMaskUsingList</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `OnColumnInput`<sup>Optional</sup> <a name="OnColumnInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumnInput"></a>

```go
func OnColumnInput() *string
```

- *Type:* *string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.usingInput"></a>

```go
func UsingInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `OnColumn`<sup>Required</sup> <a name="OnColumn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumn"></a>

```go
func OnColumn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfosPoliciesColumnMask
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a>

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection">PutTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection">ResetTagIntrospection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagIntrospection` <a name="PutTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```go
func PutTagIntrospection(value DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `ResetTagIntrospection` <a name="ResetTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```go
func ResetTagIntrospection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection">TagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">TagIntrospectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagIntrospection`<sup>Required</sup> <a name="TagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```go
func TagIntrospection() DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `TagIntrospectionInput`<sup>Optional</sup> <a name="TagIntrospectionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```go
func TagIntrospectionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">ColumnAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">ColumnAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnAliasInput`<sup>Optional</sup> <a name="ColumnAliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```go
func ColumnAliasInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `ColumnAlias`<sup>Required</sup> <a name="ColumnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```go
func ColumnAlias() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">PutColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">PutTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">ResetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnTagValue` <a name="PutColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```go
func PutColumnTagValue(value DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `PutTagValue` <a name="PutTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```go
func PutTagValue(value DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `ResetColumnTagValue` <a name="ResetColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```go
func ResetColumnTagValue()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">ColumnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">TagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">ColumnTagValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnTagValue`<sup>Required</sup> <a name="ColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```go
func ColumnTagValue() DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```go
func TagValue() DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `ColumnTagValueInput`<sup>Optional</sup> <a name="ColumnTagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```go
func ColumnTagValueInput() interface{}
```

- *Type:* interface{}

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingList <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesColumnMaskUsingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPolicyInfosPoliciesColumnMaskUsingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get"></a>

```go
func Get(index *f64) DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.putFunctionArgExpression">PutFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetFunctionArgExpression">ResetFunctionArgExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunctionArgExpression` <a name="PutFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.putFunctionArgExpression"></a>

```go
func PutFunctionArgExpression(value DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpression</a>

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetConstant` <a name="ResetConstant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetConstant"></a>

```go
func ResetConstant()
```

##### `ResetFunctionArgExpression` <a name="ResetFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetFunctionArgExpression"></a>

```go
func ResetFunctionArgExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.functionArgExpression">FunctionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constantInput">ConstantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.functionArgExpressionInput">FunctionArgExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constant">Constant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArgExpression`<sup>Required</sup> <a name="FunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.functionArgExpression"></a>

```go
func FunctionArgExpression() DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskUsingFunctionArgExpressionOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constantInput"></a>

```go
func ConstantInput() *string
```

- *Type:* *string

---

##### `FunctionArgExpressionInput`<sup>Optional</sup> <a name="FunctionArgExpressionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.functionArgExpressionInput"></a>

```go
func FunctionArgExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constant"></a>

```go
func Constant() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesDenyOutputReference <a name="DataDatabricksPolicyInfosPoliciesDenyOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesDenyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesDenyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny">DataDatabricksPolicyInfosPoliciesDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfosPoliciesDeny
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDeny">DataDatabricksPolicyInfosPoliciesDeny</a>

---


### DataDatabricksPolicyInfosPoliciesGrantOutputReference <a name="DataDatabricksPolicyInfosPoliciesGrantOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesGrantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesGrantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant">DataDatabricksPolicyInfosPoliciesGrant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfosPoliciesGrant
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrant">DataDatabricksPolicyInfosPoliciesGrant</a>

---


### DataDatabricksPolicyInfosPoliciesList <a name="DataDatabricksPolicyInfosPoliciesList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPolicyInfosPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get"></a>

```go
func Get(index *f64) DataDatabricksPolicyInfosPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesMatchColumnsList <a name="DataDatabricksPolicyInfosPoliciesMatchColumnsList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesMatchColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPolicyInfosPoliciesMatchColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get"></a>

```go
func Get(index *f64) DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference <a name="DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfosPoliciesMatchColumns
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>

---


### DataDatabricksPolicyInfosPoliciesOutputReference <a name="DataDatabricksPolicyInfosPoliciesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPolicyInfosPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPolicyInfosPoliciesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfig">DataDatabricksPolicyInfosPoliciesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMask">ColumnMask</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.deny">Deny</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference">DataDatabricksPolicyInfosPoliciesDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipals">ExceptPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableType">ForSecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.grant">Grant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference">DataDatabricksPolicyInfosPoliciesGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumns">MatchColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList">DataDatabricksPolicyInfosPoliciesMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference">DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipals">ToPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenCondition">WhenCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullnameInput">OnSecurableFullnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableTypeInput">OnSecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableType">OnSecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnMask`<sup>Required</sup> <a name="ColumnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMask"></a>

```go
func ColumnMask() DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.deny"></a>

```go
func Deny() DataDatabricksPolicyInfosPoliciesDenyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesDenyOutputReference">DataDatabricksPolicyInfosPoliciesDenyOutputReference</a>

---

##### `ExceptPrincipals`<sup>Required</sup> <a name="ExceptPrincipals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipals"></a>

```go
func ExceptPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `ForSecurableType`<sup>Required</sup> <a name="ForSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableType"></a>

```go
func ForSecurableType() *string
```

- *Type:* *string

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.grant"></a>

```go
func Grant() DataDatabricksPolicyInfosPoliciesGrantOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesGrantOutputReference">DataDatabricksPolicyInfosPoliciesGrantOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchColumns`<sup>Required</sup> <a name="MatchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumns"></a>

```go
func MatchColumns() DataDatabricksPolicyInfosPoliciesMatchColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList">DataDatabricksPolicyInfosPoliciesMatchColumnsList</a>

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference">DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference</a>

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilter"></a>

```go
func RowFilter() DataDatabricksPolicyInfosPoliciesRowFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterOutputReference</a>

---

##### `ToPrincipals`<sup>Required</sup> <a name="ToPrincipals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipals"></a>

```go
func ToPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `WhenCondition`<sup>Required</sup> <a name="WhenCondition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenCondition"></a>

```go
func WhenCondition() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnSecurableFullnameInput`<sup>Optional</sup> <a name="OnSecurableFullnameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullnameInput"></a>

```go
func OnSecurableFullnameInput() *string
```

- *Type:* *string

---

##### `OnSecurableTypeInput`<sup>Optional</sup> <a name="OnSecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableTypeInput"></a>

```go
func OnSecurableTypeInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullname"></a>

```go
func OnSecurableFullname() *string
```

- *Type:* *string

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableType"></a>

```go
func OnSecurableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfosPolicies
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>

---


### DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference <a name="DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesRowFilterOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesRowFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesRowFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing"></a>

```go
func PutUsing(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUsing` <a name="ResetUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resetUsing"></a>

```go
func ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.using">Using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList">DataDatabricksPolicyInfosPoliciesRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.usingInput">UsingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.using"></a>

```go
func Using() DataDatabricksPolicyInfosPoliciesRowFilterUsingList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList">DataDatabricksPolicyInfosPoliciesRowFilterUsingList</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.usingInput"></a>

```go
func UsingInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPolicyInfosPoliciesRowFilter
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection">PutTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection">ResetTagIntrospection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagIntrospection` <a name="PutTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```go
func PutTagIntrospection(value DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `ResetTagIntrospection` <a name="ResetTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```go
func ResetTagIntrospection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection">TagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">TagIntrospectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagIntrospection`<sup>Required</sup> <a name="TagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```go
func TagIntrospection() DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `TagIntrospectionInput`<sup>Optional</sup> <a name="TagIntrospectionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```go
func TagIntrospectionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">ColumnAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">ColumnAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnAliasInput`<sup>Optional</sup> <a name="ColumnAliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```go
func ColumnAliasInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `ColumnAlias`<sup>Required</sup> <a name="ColumnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```go
func ColumnAlias() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">PutColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">PutTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">ResetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnTagValue` <a name="PutColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```go
func PutColumnTagValue(value DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `PutTagValue` <a name="PutTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```go
func PutTagValue(value DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `ResetColumnTagValue` <a name="ResetColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```go
func ResetColumnTagValue()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">ColumnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">TagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">ColumnTagValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnTagValue`<sup>Required</sup> <a name="ColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```go
func ColumnTagValue() DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```go
func TagValue() DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `ColumnTagValueInput`<sup>Optional</sup> <a name="ColumnTagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```go
func ColumnTagValueInput() interface{}
```

- *Type:* interface{}

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingList <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesRowFilterUsingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPolicyInfosPoliciesRowFilterUsingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get"></a>

```go
func Get(index *f64) DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.putFunctionArgExpression">PutFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetFunctionArgExpression">ResetFunctionArgExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunctionArgExpression` <a name="PutFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.putFunctionArgExpression"></a>

```go
func PutFunctionArgExpression(value DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpression</a>

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetConstant` <a name="ResetConstant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetConstant"></a>

```go
func ResetConstant()
```

##### `ResetFunctionArgExpression` <a name="ResetFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetFunctionArgExpression"></a>

```go
func ResetFunctionArgExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.functionArgExpression">FunctionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constantInput">ConstantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.functionArgExpressionInput">FunctionArgExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constant">Constant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArgExpression`<sup>Required</sup> <a name="FunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.functionArgExpression"></a>

```go
func FunctionArgExpression() DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterUsingFunctionArgExpressionOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constantInput"></a>

```go
func ConstantInput() *string
```

- *Type:* *string

---

##### `FunctionArgExpressionInput`<sup>Optional</sup> <a name="FunctionArgExpressionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.functionArgExpressionInput"></a>

```go
func FunctionArgExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constant"></a>

```go
func Constant() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPolicyInfosProviderConfigOutputReference <a name="DataDatabricksPolicyInfosProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspolicyinfos"

datadatabrickspolicyinfos.NewDataDatabricksPolicyInfosProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPolicyInfosProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



