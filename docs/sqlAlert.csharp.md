# `sqlAlert` Submodule <a name="`sqlAlert` Submodule" id="@cdktn/provider-databricks.sqlAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlAlert <a name="SqlAlert" id="@cdktn/provider-databricks.sqlAlert.SqlAlert"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert databricks_sql_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SqlAlert(Construct Scope, string Id, SqlAlertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig">SqlAlertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig">SqlAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.resetRearm">ResetRearm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.putOptions"></a>

```csharp
private void PutOptions(SqlAlertOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.putProviderConfig"></a>

```csharp
private void PutProviderConfig(SqlAlertProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig">SqlAlertProviderConfig</a>

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetRearm` <a name="ResetRearm" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.resetRearm"></a>

```csharp
private void ResetRearm()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SqlAlert resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

SqlAlert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

SqlAlert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

SqlAlert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

SqlAlert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SqlAlert resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlAlert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SqlAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.options">Options</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference">SqlAlertOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference">SqlAlertProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.createdAtInput">CreatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig">SqlAlertProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.queryIdInput">QueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.rearmInput">RearmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.updatedAtInput">UpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.queryId">QueryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.rearm">Rearm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.options"></a>

```csharp
public SqlAlertOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference">SqlAlertOptionsOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.providerConfig"></a>

```csharp
public SqlAlertProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference">SqlAlertProviderConfigOutputReference</a>

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.createdAtInput"></a>

```csharp
public string CreatedAtInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.optionsInput"></a>

```csharp
public SqlAlertOptions OptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.providerConfigInput"></a>

```csharp
public SqlAlertProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig">SqlAlertProviderConfig</a>

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.queryIdInput"></a>

```csharp
public string QueryIdInput { get; }
```

- *Type:* string

---

##### `RearmInput`<sup>Optional</sup> <a name="RearmInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.rearmInput"></a>

```csharp
public double RearmInput { get; }
```

- *Type:* double

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.updatedAtInput"></a>

```csharp
public string UpdatedAtInput { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.queryId"></a>

```csharp
public string QueryId { get; }
```

- *Type:* string

---

##### `Rearm`<sup>Required</sup> <a name="Rearm" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.rearm"></a>

```csharp
public double Rearm { get; }
```

- *Type:* double

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.sqlAlert.SqlAlert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlAlertConfig <a name="SqlAlertConfig" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SqlAlertConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    SqlAlertOptions Options,
    string QueryId,
    string CreatedAt = null,
    string Id = null,
    string Parent = null,
    SqlAlertProviderConfig ProviderConfig = null,
    double Rearm = null,
    string UpdatedAt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#name SqlAlert#name}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.queryId">QueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#query_id SqlAlert#query_id}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#created_at SqlAlert#created_at}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#id SqlAlert#id}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#parent SqlAlert#parent}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig">SqlAlertProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.rearm">Rearm</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#rearm SqlAlert#rearm}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#name SqlAlert#name}.

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.options"></a>

```csharp
public SqlAlertOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#options SqlAlert#options}

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.queryId"></a>

```csharp
public string QueryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#query_id SqlAlert#query_id}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#created_at SqlAlert#created_at}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#id SqlAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#parent SqlAlert#parent}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.providerConfig"></a>

```csharp
public SqlAlertProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig">SqlAlertProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#provider_config SqlAlert#provider_config}

---

##### `Rearm`<sup>Optional</sup> <a name="Rearm" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.rearm"></a>

```csharp
public double Rearm { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#rearm SqlAlert#rearm}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.sqlAlert.SqlAlertConfig.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}.

---

### SqlAlertOptions <a name="SqlAlertOptions" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SqlAlertOptions {
    string Column,
    string Op,
    string Value,
    string CustomBody = null,
    string CustomSubject = null,
    string EmptyResultState = null,
    bool|IResolvable Muted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.column">Column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#column SqlAlert#column}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.op">Op</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#op SqlAlert#op}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#value SqlAlert#value}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.customBody">CustomBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.customSubject">CustomSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.emptyResultState">EmptyResultState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#empty_result_state SqlAlert#empty_result_state}. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.muted">Muted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#muted SqlAlert#muted}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#column SqlAlert#column}.

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.op"></a>

```csharp
public string Op { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#op SqlAlert#op}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#value SqlAlert#value}.

---

##### `CustomBody`<sup>Optional</sup> <a name="CustomBody" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.customBody"></a>

```csharp
public string CustomBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}.

---

##### `CustomSubject`<sup>Optional</sup> <a name="CustomSubject" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.customSubject"></a>

```csharp
public string CustomSubject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}.

---

##### `EmptyResultState`<sup>Optional</sup> <a name="EmptyResultState" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.emptyResultState"></a>

```csharp
public string EmptyResultState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#empty_result_state SqlAlert#empty_result_state}.

---

##### `Muted`<sup>Optional</sup> <a name="Muted" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptions.property.muted"></a>

```csharp
public bool|IResolvable Muted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#muted SqlAlert#muted}.

---

### SqlAlertProviderConfig <a name="SqlAlertProviderConfig" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SqlAlertProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#workspace_id SqlAlert#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/sql_alert#workspace_id SqlAlert#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlAlertOptionsOutputReference <a name="SqlAlertOptionsOutputReference" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SqlAlertOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomBody">ResetCustomBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomSubject">ResetCustomSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetEmptyResultState">ResetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetMuted">ResetMuted</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomBody` <a name="ResetCustomBody" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomBody"></a>

```csharp
private void ResetCustomBody()
```

##### `ResetCustomSubject` <a name="ResetCustomSubject" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomSubject"></a>

```csharp
private void ResetCustomSubject()
```

##### `ResetEmptyResultState` <a name="ResetEmptyResultState" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetEmptyResultState"></a>

```csharp
private void ResetEmptyResultState()
```

##### `ResetMuted` <a name="ResetMuted" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetMuted"></a>

```csharp
private void ResetMuted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBodyInput">CustomBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubjectInput">CustomSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultStateInput">EmptyResultStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.mutedInput">MutedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.opInput">OpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBody">CustomBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubject">CustomSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultState">EmptyResultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.muted">Muted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.op">Op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `CustomBodyInput`<sup>Optional</sup> <a name="CustomBodyInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBodyInput"></a>

```csharp
public string CustomBodyInput { get; }
```

- *Type:* string

---

##### `CustomSubjectInput`<sup>Optional</sup> <a name="CustomSubjectInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubjectInput"></a>

```csharp
public string CustomSubjectInput { get; }
```

- *Type:* string

---

##### `EmptyResultStateInput`<sup>Optional</sup> <a name="EmptyResultStateInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultStateInput"></a>

```csharp
public string EmptyResultStateInput { get; }
```

- *Type:* string

---

##### `MutedInput`<sup>Optional</sup> <a name="MutedInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.mutedInput"></a>

```csharp
public bool|IResolvable MutedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.opInput"></a>

```csharp
public string OpInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `CustomBody`<sup>Required</sup> <a name="CustomBody" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBody"></a>

```csharp
public string CustomBody { get; }
```

- *Type:* string

---

##### `CustomSubject`<sup>Required</sup> <a name="CustomSubject" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubject"></a>

```csharp
public string CustomSubject { get; }
```

- *Type:* string

---

##### `EmptyResultState`<sup>Required</sup> <a name="EmptyResultState" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultState"></a>

```csharp
public string EmptyResultState { get; }
```

- *Type:* string

---

##### `Muted`<sup>Required</sup> <a name="Muted" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.muted"></a>

```csharp
public bool|IResolvable Muted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.op"></a>

```csharp
public string Op { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.internalValue"></a>

```csharp
public SqlAlertOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---


### SqlAlertProviderConfigOutputReference <a name="SqlAlertProviderConfigOutputReference" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SqlAlertProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig">SqlAlertProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfigOutputReference.property.internalValue"></a>

```csharp
public SqlAlertProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlAlert.SqlAlertProviderConfig">SqlAlertProviderConfig</a>

---



